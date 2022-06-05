import * as React from 'react';

type CardProps = { title: string; body: string; id: any };

export function Card({ title, body, id }: CardProps) {
  return (
    <div className='card'>
      <div className='card-header'>
        <h2>
          {title} - {id}
        </h2>
      </div>
      <div className='card-body'>
        <p>{body}</p>
      </div>
    </div>
  );
}
