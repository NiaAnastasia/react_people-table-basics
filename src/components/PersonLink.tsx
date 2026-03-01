import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Person } from '../types';

type Props = {
  name: string | null;
  people: Person[];
};

export const PersonLink: React.FC<Props> = ({ name, people }) => {
  if (!name) {
    return <>-</>;
  }

  const foundPerson = people.find(person => person.name === name);

  if (foundPerson) {
    return (
      <Link
        to={`/people/${foundPerson.slug}`}
        className={cn({
          'has-text-danger': foundPerson.sex === 'f',
        })}
      >
        {name}
      </Link>
    );
  }

  return <>{name}</>;
};
