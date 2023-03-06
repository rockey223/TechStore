

const FormatPrice = ({price}) => {
    const formattedPrice = price.toLocaleString("ne-NP", {
        style: "currency",
        currency: "NPR"
      });
  return (
    <span>
{formattedPrice}
    </span>
    
  )
}

export default FormatPrice