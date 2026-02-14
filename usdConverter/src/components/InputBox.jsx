
import React, { useState, useEffect } from 'react'
import useCurrencyInfo from "../hooks/useCurrency.js"

export const InputBox = () => {
    const [currencyList, setCurrencyList] = useState({})
    const [currentCurrency, setCurrentCurrency] = useState("inr")
    const [currentInput, setCurrentInput] = useState(1)

    const [toCurrency, setToCurrency] = useState("usd")
    let currentCurrencyInfo = useCurrencyInfo(currentCurrency.toLowerCase())
    currentInput * currentCurrencyInfo[toCurrency.toLowerCase()]
    let datas=currentInput * currentCurrencyInfo[toCurrency.toLowerCase()]
    




    async function getCurrencyList() {
        let res = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
        let data = await res.json()
        setCurrencyList(data)
       
    }
    useEffect(() => {
        getCurrencyList();
    }, [currentCurrency]);


    return (


        <div className="min-h-screen bg-blue-950 m-0 p-0 flex items-center justify-center">
            <div className="relative border-2 border-cyan-300 rounded-2xl h-64 w-2/3">
                <div className="h-32 border-b-2 border-white flex items-center justify-center">
                    <div className="w-2/3">

                        <div class="mt-2 ">
                            <label for="price" class="block text-sm/6 font-medium text-white">From</label>
                            <div class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                                <div class="shrink-0 text-base text-gray-400 select-none sm:text-sm/6">$</div>
                                <input id="price" type="text" name="price" placeholder="0.00" class="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" value={currentInput} onChange={(e) => setCurrentInput(e.target.value)} />
                                <div class="grid shrink-0 grid-cols-1 focus-within:relative">
                                    <select id="currency" name="currency" aria-label="Currency" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-800 py-1.5 pr-7 pl-3 text-base text-gray-400 *:bg-gray-800 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" onChange={(e) => setCurrentCurrency(e.target.value)}>
                                        {Object.entries(currencyList).map(([key, value]) => (<option key={key}>{key.toUpperCase()}</option>))}
                                    </select>
                                    <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4">
                                        <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="child flex items-center justify-center">
                    <div className="w-2/3">

                        <div class="mt-2 ">
                            <label for="price" class="block text-sm/6 font-medium text-white">To</label>
                            <div class="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
                                <div class="shrink-0 text-base text-gray-400 select-none sm:text-sm/6">$</div>
                                <input id="price" type="text" name="price" placeholder="0.00" class="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" value={datas}/>
                                <div class="grid shrink-0 grid-cols-1 focus-within:relative">
                                    <select id="currency" name="currency" aria-label="Currency" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-800 py-1.5 pr-7 pl-3 text-base text-gray-400 *:bg-gray-800 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                                        {Object.entries(currencyList).map(([key]) => (<option>{key.toUpperCase()}</option>))}
                                    </select>
                                    <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4">
                                        <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>


    )
}