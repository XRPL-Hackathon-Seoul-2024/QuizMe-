import { Button } from "../ui/button";
import { useState } from "react";

export function MultiSelect(props) {
  const question = props.question;

  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  return (
    <div>
      {question.options.map((option, index) => (
        <Button
          key={index}
          variant={selectedOption === index ? "primary" : "outline"}
          onClick={() => handleOptionSelect(index)}
          className="w-full justify-start"
        >
          {option}
        </Button>
      ))}
    </div>
  );
}
