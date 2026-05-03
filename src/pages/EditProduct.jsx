import Navbar from '../components/Navbar'
import ProductInformation from '../components/ProductInformation'
import { PencilLine, Save } from 'lucide-react'

const EditProduct = () => {

  return (
    <>
      <Navbar />
      <div className="general-background py-5">
        <ProductInformation 
          title="EDITAR PRODUCTO"
          iconTitle={<PencilLine size={40} />}
          iconButton={<Save size={20} />}
          buttonTitle="GUARDAR CAMBIOS"
        />
      </div>
    </>
  )
}

export default EditProduct
