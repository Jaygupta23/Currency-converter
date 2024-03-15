import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency = "usd",
    amountDisable,
    currencyDisable,
    
    className = "",
}) {
   
    const amountInputId =useId()
console.log(onAmountChange,"=-------------");
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    type="number"
                    id={amountInputId}
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled = {amountDisable}
                    className="outline-none w-full py-1.5 font-semibold"
                    style={{backgroundColor: "#ffd6"}}
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                value={selectCurrency}
                onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                >
                  {currencyOptions.map((currency)=>{
                   return <option key={currency} value={currency}>
                    {currency}
                </option>
                  })}
                </select>
            </div>
        </div>
    );
}

export default InputBox;