import Navbar from '../components/Navbar'
import ProductInformation from '../components/ProductInformation'
import { PackagePlus, Save } from 'lucide-react'

const AddProduct = () => {
  return (
    <>
      <Navbar />
      <div className="general-background py-5">
        <ProductInformation 
          title="AGREGAR PRODUCTO"
          iconTitle={<PackagePlus size={40} />}
          iconButton={<Save size={20} />}
          buttonTitle="AGREGAR PRODUCTO"
        />
      </div>
    </>
  )
}

export default AddProduct
