import { useState } from "react";

interface OrderFormProps {
    onSubmit(order:{name: string ; cups: number}): void
}


export  function OrderForm({onSubmit}: OrderFormProps) {

    const [name, setName] = useState<String>("Masala");
    const [cups, setCups] = useState<number>(1);

  return (
    <form onSubmit={handleSubmit} ></form>
  )
}

