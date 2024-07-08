export default function formatearMoneda(monto) {
  let formatearMoneda = new Intl.NumberFormat("do-DO", {
    style: "currency",
    currency: "DOP",
  });

  return formatearMoneda.format(monto);
}
