import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Galeria() {
  const [selectedImage, setSelectedImage] = useState(null)
  const images = [
    '0009E670-B8B0-43D3-BA85-C80F4317A94B.JPG',
    '0a112134-911f-4e41-a297-b086e2402226.JPG',
    '11642013-554b-4ab0-8e8e-ba5c7617f2a9(1).JPG',
    '13b7e84b-c7d9-43f9-a0b9-bf391d1c4070.JPG',
    '143a6df3-4ee9-4086-907a-8ccafb6253b9.JPG',
    '1462495c-8f77-4d99-9b53-835d2c63e06f(1).JPG',
    '1f13c781-927e-4184-ae90-b0c3489ebe56.JPG',
    '1f8b26dc-b5c1-418a-8775-cb5f0eb111dc.JPG',
    '200b8a38-f256-42ae-b2cd-28e3ecde733e.JPG',
    '29299468-30ec-4552-9a53-753e75b36790.JPG',
    '383e19d5-3da8-48b1-a7e7-95a5c316af08.JPG',
    '3908a2b3-b87d-4091-8bea-8c622a15cb30.JPG',
    '39d37e5e-3ec9-4b0e-a9cc-463f2c3e7af8.JPG',
    '3ea50579-42a6-4434-9de9-b93ed7796270.JPG',
    '42b5ad4d-de05-4d74-ba6a-2fdf3ecf6f4e.JPG',
    '481b1655-d8da-474c-94bd-2f98d9a20109.JPG',
    '484db0ed-2b75-49ac-a032-3fed0562d0d3.JPG',
    '4c33e06b-ce44-441a-a740-c7f073a5ac35.JPG',
    '520d02ab-93ed-4110-9414-9308e9acc9c9.JPG',
    '521566e8-d8aa-4c78-aef0-ae4b67f77ca8.JPG',
    '605ced3d-c181-43f0-b30f-43b115e1e8bc.JPG',
    '6a030476-eedb-495c-bf0d-dffc11847400.JPG',
    '6c54b8fc-5409-4abb-8c7d-efb6152de13b.JPG',
    '6ef16d91-c674-45f3-a6fa-707b808f9403.JPG',
    '797a5720-d87a-43ca-96b7-222ae5b85b8b.JPG',
    '79a2cd0e-66a0-486b-8818-b5c3d2c1f1cb.JPG',
    '81e9bdca-5a1b-4600-8b6e-30a2fad52029.JPG',
    '84645e8e-85cc-4129-9859-4a4618967f9f(1).JPG',
    '97368D1D-7C10-4347-AC89-5A3DF07D7FB3.JPG',
    '9fb50be0-b30c-47e1-9647-20dd4c9d206e.JPG',
    'a84dfd8a-88c2-4d36-80b2-8cd915f09f80.JPG',
    'aae4d610-a09e-4a11-b7e0-f71b746b4480.JPG',
    'abdb8a09-ba90-4ae8-bded-4a970e5b05af.JPG',
    'Archivo_014.png',
    'b2c1f702-4341-4a24-9cbd-7b3eed026d27.JPG',
    'b3dff703-5431-4d8e-b5e9-28886a78f744.JPG',
    'bc823b40-1965-49ff-b36c-e691aeaabd5f.JPG',
    'c37bde13-e8fd-4f1f-9d26-8df0023348c3.JPG',
    'c6954793-e830-4cc5-8238-d0181d2df233.JPG',
    'ddd9fed0-875b-45a5-a310-bc550c37b916.jpg',
    'e7c12333-8ec3-48a4-9a0b-cd7ce10196a5(1).JPG',
    'eb6c58ec-f6ce-4458-9676-7144559a4f89.JPG',
    'f3dc0322-5266-4422-b6ff-30ce5d1b7164(1).JPG',
    'f5a467bf-ef20-4111-b8f8-1cf7da147e94.JPG',
    'f7e56974-8560-464c-9bdb-32731a8eff6f.JPG',
    'f9609a3c-84e1-45c8-8029-2b0802ef4cc5.JPG',
    'IMG_1453.jpg',
    'IMG_1460.jpg',
    'IMG_1523.jpg',
    'IMG_1530.jpg',
    'IMG_1533.jpg',
    'IMG_1545.jpg',
    'IMG_1597.jpg',
    'IMG_1598.jpg',
    'IMG_1736.jpg',
    'IMG_1738.jpg',
    'IMG_1765.jpg',
    'IMG_1766.jpg',
    'IMG_1767.jpg',
    'IMG_1770.jpg',
    'IMG_1771.jpg',
    'IMG_1772.jpg',
    'IMG_1773.jpg',
    'IMG_1775.jpg',
    'IMG_1776.jpg',
    'IMG_1777.jpg',
    'IMG_1778.jpg',
    'IMG_1780.jpg',
    'IMG_1781.jpg',
    'IMG_1783.jpg',
    'IMG_1784.jpg',
    'IMG_1785.jpg',
    'IMG_1786.jpg',
    'IMG_1787.jpg',
    'IMG_1788.jpg',
    'IMG_1789.jpg',
    'IMG_1790.jpg',
    'IMG_1791.jpg',
    'IMG_1792.jpg',
    'IMG_1793.jpg',
    'IMG_1794.jpg',
    'IMG_1795.jpg',
    'IMG_1796.jpg',
    'IMG_1797.jpg',
    'IMG_1798.jpg',
    'IMG_1799.PNG',
    'IMG_1800.jpg',
    'IMG_1801.jpg',
    'IMG_1802.jpg',
    'IMG_1803.jpg',
    'IMG_1804.jpg',
    'IMG_1805.jpg',
    'IMG_1806.jpg',
    'IMG_1807.jpg',
    'IMG_1808.jpg',
    'IMG_1809.jpg',
    'IMG_1810.jpg',
    'IMG_1811.jpg',
    'IMG_1812.jpg',
    'IMG_1814.jpg',
    'IMG_1815.jpg',
    'IMG_4845.JPG',
    'IMG_4850.JPG',
    'IMG_9568.jpg',
  ]

  return (
    <>
      <Header />
      <div className="galeria-page">
        <div className="galeria-hero">
          <h1 className="galeria-title">Galeria</h1>
          <p className="galeria-subtitle">
            Una seleccion de montajes y momentos que reflejan nuestra calidad.
          </p>
        </div>

        <div className="galeria-content">
          <div className="galeria-masonry">
            {images.map((fileName, index) => (
              <button
                key={fileName}
                type="button"
                className="galeria-item"
                onClick={() => setSelectedImage(fileName)}
              >
                <img
                  src={`/Galeria/${fileName}`}
                  alt={`Galeria ${index + 1}`}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      {selectedImage && (
        <div
          className="galeria-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="galeria-modal-close"
            aria-label="Cerrar imagen"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <img
            src={`/Galeria/${selectedImage}`}
            alt="Vista ampliada"
            className="galeria-modal-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
      <Footer />
    </>
  )
}

export default Galeria
