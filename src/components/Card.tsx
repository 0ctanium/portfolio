import React from 'react';

export type CardProps = {
  link: string;
  title: string;
  desc: string;
};

const Card: React.FC<CardProps> = ({ link, title, desc }) => {
  return (
    <a
      href={link}
      className="bg-gray-50 transition-colors rounded-xl overflow-hidden p-6 space-3 text-left border border-gray-50 group hover:border-blue-600 hover:text-blue-600">
      <h3 className="text-2xl font-bold transition-colors group-hover:text-blue-600">
        {title} &rarr;
      </h3>
      <p>{desc}</p>
    </a>
  );
};

export default Card;
