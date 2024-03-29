const Heart = ({ className = '', ...props }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={32} height={32} viewBox='0 0 32 32' {...props} className={className}>
    <title>{'Heart'}</title>
    <path d='M23.6 2c-3.363 0-6.258 2.736-7.599 5.594C14.659 4.736 11.764 2 8.4 2 3.763 2 0 5.764 0 10.401c0 9.433 9.516 11.906 16.001 21.232C22.131 22.365 32 19.533 32 10.401 32 5.764 28.237 2 23.6 2z' />
  </svg>
)

export default Heart
