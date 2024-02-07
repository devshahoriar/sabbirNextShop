import OutLIne from '@/components/shared/dashBoardComponents/OutLIne'

const layout = ({ children }) => {
  return (
    <main className="relative ">
      <OutLIne />
      <section className="md:pl-[300px] border-t w-full">{children} </section>
    </main>
  )
}

export default layout
