import React, { useState } from "react";
import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";

interface QuestionSearchProps {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const QuestionSearch = ({ checked, onChange }: QuestionSearchProps) => {
  return (
    <Card boxShadow="xs" borderRadius="m">
      <h2>Question Search</h2>
      <Divider />
      <span>Sort by unanswered</span>
      <input
        type="checkbox"
        name="answered"
        id="answered"
        checked={checked}
        onChange={onChange}
      />
    </Card>
  );
};
