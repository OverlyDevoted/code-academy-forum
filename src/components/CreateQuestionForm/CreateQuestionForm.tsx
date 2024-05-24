import React, { useRef, useState } from "react";
import { Input } from "../Input";
import { SelectInput, SelectInputOption } from "../SelectInput/SelectInput";
import { useCategories } from "@/hooks/useCategories";
import { Categories } from "@/types/Backend.types";

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

export const CreateQuestionForm = () => {
  const { categoryData } = useCategories();
  const questionTitleRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState<SelectInputOption>();

  const categoryOptions = getCategoryOptions(
    categoryData ? categoryData : null
  );

  return (
    <form>
      <h1>Ask a Question</h1>
      <p>Ask any question from a range of different categories!</p>
      <section>
        <div>
          <h2 id="question-title-label">Question title</h2>
          <Input type="text" id="question-title" ref={questionTitleRef} />
        </div>
        <div>
          <h2>Question category</h2>
          <SelectInput
            onChange={setSelectedOption}
            value={selectedOption}
            options={categoryOptions}
          ></SelectInput>
        </div>
        <div>
          <h2>Question text</h2>
          <textarea name="question-text" id="question-text"></textarea>
        </div>
      </section>
    </form>
  );
};
