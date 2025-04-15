import React from "react";

const ContactList = () => {
  const contactList = [
    {
      name: "Jalal Manafi",
      title: "Linkedin",
      value: "https://www.linkedin.com/in/jalalbmnf/",
    },
    {
      name: "@jalalbmnf",
      title: "X",
      value: "https://x.com/jalalbmnf",
    },
    {
      name: "@jalalmanafi",
      title: "Github",
      value: "https://github.com/jalalmanafi",
    },
    {
      name: "+994773080251",
      title: "Phone",
      value: "+994773080251",
      type:"tel"
    },
  ];
  return (
    <ul>
      {contactList.map(({ name, title, value,type }) => (
        <li className="flex items-center justify-between" key={title}>
          <span>{title}</span>
          <a target="_blank" className="underline" href={type === 'tel' ? "tel:+994773080251" : value}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
