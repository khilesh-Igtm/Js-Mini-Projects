const generateBillButton = document.querySelector('.generate-bill');
const billAmount = document.querySelector('.bill-amount')
const discountPercentage = document.querySelector('.discount-percentage')
const tipsPercentage = document.querySelector('.tip-percentage')
const noOfCustomers = document.querySelector('.no-of-customers')
const totalTipPaid = document.querySelector('.total-tip-paid')
const totalAmountToPay = document.querySelector('.total-amount-to-pay');
const discountValue = document.querySelector('.discount-value')
const tipValue = document.querySelector('.tip-value')
const customerValue = document.querySelector('.customer-value')
const eachCustomerToPay = document.querySelector('.each-customer-to-pay');

function calculateBill() {
  console.log(billAmount.value, tipsPercentage.value, discountPercentage.value, noOfCustomers.value);

  const billAmountAfterDiscountPercentage = billAmount.value - (discountPercentage.value * billAmount.value) / 100;

  const getTipAmount = billAmountAfterDiscountPercentage * (tipsPercentage.value / 100);

  const TotalBill = billAmountAfterDiscountPercentage + getTipAmount;
  const eachCustomerToPayBill = TotalBill/noOfCustomers.value

  totalTipPaid.textContent = getTipAmount;
  totalAmountToPay.textContent = TotalBill;
  tipValue.textContent = tipsPercentage.value
  discountValue.textContent = discountPercentage.value;
  customerValue.textContent = noOfCustomers.value;
  eachCustomerToPay.textContent = eachCustomerToPayBill


}

generateBillButton.addEventListener('click', calculateBill)