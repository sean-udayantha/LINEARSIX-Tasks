function orderSalesByTotal(sales) {
    return sales
      .map((sale) => ({
        ...sale,
        Total: sale.amount * sale.quantity,
      })).sort((a, b) => b.Total - a.Total);
  }
  
 
  const sales = [
    { amount: 1000, quantity: 5 },
    { amount: 2000, quantity: 2 },
    { amount: 1500, quantity: 4 },
  ];
  const orderedSales = orderSalesByTotal(sales);
  console.log("🚀 ~ orderedSales:", orderedSales)
  
  