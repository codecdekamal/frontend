import CreditCardIcon from "../../assets/CreditCardIcon";
const availablePaymentMethods = [
    {
      id: "credit-card",
      name: "Credit Card",
      icon: <CreditCardIcon/>,
    },
    {
      id: "debit-card",
      name: "Debit Card",
      icon: "DebitCardIcon",
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: "PayPalIcon",
    },
  ];
const PaymentMethodForm = () => {
    
  return (
    <div className="form-check form-group">
      {availablePaymentMethods.map((method) => (
        <label className="form-check-label" key={method.id}>
          <input
            type="radio"
            className="form-check-input"
            name="payment-method"
            id={method.id}
            // checked={selectedMethod === method.id}
            onChange={() => onSelectMethod(method.id)}
          />
          {method.icon}
          {method.name}
        </label>
      ))}
    </div>
  )
}

export default PaymentMethodForm
