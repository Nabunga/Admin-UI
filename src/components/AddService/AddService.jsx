import React from "react";
import "./AddService.scss";

const AddService = () => {
  return (
    <div className="add-service">
      <input type="checkbox" name="first" id="first" />
      <label className="add-service__label" htmlFor="first">
        Полный бак
      </label>

      <input type="checkbox" name="second" id="second" />
      <label className="add-service__label" htmlFor="second">
        Детское кресло
      </label>

      <input type="checkbox" name="third" id="third" />
      <label className="add-service__label" htmlFor="third">
        Правый руль
      </label>
    </div>
  );
};

export default AddService;
