import React from 'react'

const Formaspago = () => {
  return (
    <div id='Formaspago'>
        <h3 className='text-center'>Formas de pago</h3>
        <div className="text-center">
            <img src="/img/mercadopago.png" alt="" className="img-fluid" />
        </div>
        <p>Para mercadopago exiten todos los tipos de pagos disponibles online y en efectivo para Efecty.</p>
        <q className="text-justify">
            Pagar con Mercado Pago. Es elegir cualquiera de estos medios. Es rápido, seguro y no tiene costo adicional.
        </q> <br />
        <q>
            Tarjetas de crédito en hasta 48 cuotas*
            Acreditación instantánea.
        </q> <br />
        <q>
            Tarjetas de débito
            Acreditación instantánea.
        </q> <br />
        <q>
        Transferencia desde tu banco.
        Termina tu compra y haz un traspaso online sin moverte de tu casa.
        PSE
        </q>

    </div>
  )
}

export default Formaspago