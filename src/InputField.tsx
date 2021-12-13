import React, { ChangeEvent, useState } from "react";

const InputField = () => {
  const [name, setName] = useState<string>("");
  const [list, setList] = useState<String[]>([]);

  const handleName = (event: ChangeEvent<HTMLInputElement>): void => {
    const i = event?.currentTarget as HTMLInputElement;
    setName(i.value);
  };
  const addElement = (): void => {
    const newList: String[] = [...list];
    newList.push(name);
    setList(newList);
    setName("");
  };
  const removeItem = (idx: number): void => {
    const newList: String[] = [...list];
    setList(newList.filter((item) => newList.indexOf(item) !== idx));
  };
  return (
    <div>
      <label htmlFor="animal">Input Animal</label>
      <br />
      <input type="text" id="animal" value={name} onChange={handleName} />
      <button onClick={addElement}>Add animal</button>
      <section>
        <h2>Animal list</h2>
        <ol>
          {list.map((item, idx) => {
            return (
              <li key={idx} onClick={() => removeItem(idx)}>
                {item}
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
};

export default InputField;
