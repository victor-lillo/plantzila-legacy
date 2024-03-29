const Book = ({ className = '', ...props }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={32} height={32} viewBox='0 0 32 32' {...props} className={className}>
      <title>{'Book'}</title>
      <path d='M28 4v26H7a3 3 0 1 1 0-6h19V0H6C3.8 0 2 1.8 2 4v24c0 2.2 1.8 4 4 4h24V4h-2z' />
      <path d='M7.002 26H7a1 1 0 0 0 0 2h18.999v-2H7.002z' />
    </svg>
  )
}

export default Book
