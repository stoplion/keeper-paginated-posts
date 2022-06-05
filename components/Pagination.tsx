export function Pagination({
  isFirstPage,
  isLastPage,
  onPaginate,
}: {
  isFirstPage: boolean;
  isLastPage: boolean;
  onPaginate: (direction: number) => void;
}) {
  return (
    <nav className='pagination'>
      <div
        className={`pagination-item ${
          isFirstPage && `pagination-item-disabled`
        }`}
      >
        <button onClick={() => onPaginate(-1)}>&larr;</button>
      </div>
      <div
        className={`pagination-item ${
          isLastPage && `pagination-item-disabled`
        }`}
      >
        <button onClick={() => onPaginate(1)}>&rarr;</button>
      </div>
    </nav>
  );
}
