export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='body-wrapper'>
      <div className='body'>{children}</div>
    </div>
  )
}
