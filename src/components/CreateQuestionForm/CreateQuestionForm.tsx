import React, { useMemo, useRef, useState } from "react";
import classNames from "classnames/bind";
import { useQuery } from "@tanstack/react-query";
import { Input } from "../Input";
import { SelectInput, SelectInputOption } from "../SelectInput/SelectInput";
import { useCategories } from "@/hooks/useCategories";
import { Categories, QuestionPost } from "@/types/Backend.types";
import { TextArea } from "../TextArea";
import {
  QUESTION_TEXT_MAX,
  QUESTION_TEXT_MIN,
  QUESTION_TITLE_MAX,
  QUESTION_TITLE_MIN,
} from "./constants/CreateQuestion.constants";
import { Divider } from "../Divider";
import { Button } from "../Button";
import { useAuth } from "@/hooks/useAuth";
import { postData } from "@/utils/postData";
import { ErrorType } from "@/types/Fetch.types";
import styles from "./CreateQuestionForm.module.css";

const cx = classNames.bind(styles);

const getCategoryOptions = (
  categoryData: Categories | null
): SelectInputOption[] => {
  if (!categoryData) return [];

  return categoryData.categories.map((category) => {
    const option: SelectInputOption = {
      label: category.category_name,
      value: category.id,
    };
    return option;
  });
};

interface CreateQuestionFormProps {
  onSuccess: () => void;
}

export const CreateQuestionForm = ({ onSuccess }: CreateQuestionFormProps) => {
  const { getToken } = useAuth();
  const { categoryData } = useCategories();

  const questionTitleRef = useRef<HTMLInputElement>(null);
  const questionTextRef = useRef<HTMLTextAreaElement>(null);

  const [selectedOption, setSelectedOption] = useState<SelectInputOption>();
  const [questionTextLength, setQuestionTextLength] = useState(0);
  const [questionTitleLength, setQuestionTitleLength] = useState(0);

  const { refetch, data, isRefetching, error } = useQuery({
    queryKey: ["questionPost"],
    queryFn: async () => {
      const token = getToken();
      const category_id = selectedOption?.value;
      const question_title = questionTitleRef.current?.value;
      const question_text = questionTextRef.current?.value;
      const res = await postData<ErrorType, QuestionPost>(
        "question",
        { category_id, question_text, question_title },
        token
      );
      onSuccess();
      setSelectedOption(undefined);
      questionTitleRef.current?.setAttribute("value", "");
      questionTextRef.current?.setAttribute("value", "");
      return res;
    },
    enabled: false,
    retry: false,
  });

  const isQuestionTitleValid = useMemo(() => {
    return (
      questionTitleLength <= QUESTION_TITLE_MAX &&
      questionTitleLength >= QUESTION_TITLE_MIN
    );
  }, [questionTitleLength]);

  const isQuestionTextValid = useMemo(() => {
    return (
      questionTextLength <= QUESTION_TEXT_MAX &&
      questionTextLength >= QUESTION_TEXT_MIN
    );
  }, [questionTextLength]);

  const categoryOptions = getCategoryOptions(
    categoryData ? categoryData : null
  );

  const handleQuestionPost = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    refetch();
  };

  return (
    <form className={cx("question-form")}>
      <div className={cx("question-form__inputs")}>
        <h1>Ask a Question</h1>
        <p className={cx("question-form__paragraph")}>
          Ask any question from a range of different categories!
        </p>
      </div>
      <Divider />
      <section className={cx("question-form__inputs")}>
        <div className={cx("question-form__input-container")}>
          <h2 id="question-title-label">Question title</h2>
          <Input
            type="text"
            id="question-title"
            ref={questionTitleRef}
            placeholder="What is your question about?"
            onChange={(e) => {
              setQuestionTitleLength(e.target.value.length);
            }}
          />
        </div>
        <div className={cx("question-form__input-container")}>
          <h2>Question category</h2>
          <SelectInput
            onChange={setSelectedOption}
            value={selectedOption}
            options={categoryOptions}
            placeholder="Select a category"
          ></SelectInput>
        </div>
        <div className={cx("question-form__input-container")}>
          <h2>Question text</h2>
          <div>
            <TextArea
              ref={questionTextRef}
              id="question_text"
              onChange={(e) => {
                setQuestionTextLength(e.target.value.length);
              }}
              placeholder="What is your question?"
            />
            <div
              className={cx("question-form__textarea-counter")}
              aria-invalid={!isQuestionTextValid}
            >
              {questionTextLength}
            </div>
          </div>
        </div>
      </section>

      <Button
        label="POST QUESTION!"
        type="submit"
        onClick={handleQuestionPost}
        isDisabled={
          !isQuestionTextValid || !isQuestionTitleValid || !selectedOption
        }
        isLoading={isRefetching}
      />
      {error && <div> error.message </div>}
    </form>
  );
};
