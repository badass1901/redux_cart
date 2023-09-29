import Products from "../components/Products"

const Home = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-600 py-4">
      <h2 className="text-3xl my-6 text-center"> Welcome to Redux toolkit Store</h2>
      <section className="mx-10 my-auto">
        <h3 className="text-2xl my-6 text-center">Our Products</h3>
        <Products />
      </section>
    </div>
  )
}

export default Home