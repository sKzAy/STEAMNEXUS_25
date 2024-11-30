import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import "@/app/globals.css"
  
  const invoices = [
    {
      invoice: "Early Bird Discount",
      paymentStatus: "PKR2000",
      
      paymentMethod: "PKR2000",
    },
    {
      invoice: "Normal Registration",
      paymentStatus: "PKR2500",
   
      paymentMethod: "PKR2500",
    },

  ]
  
  export function TableDemo() {
    return (
      <Table>
       
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"></TableHead>
            <TableHead className=" text-red-400 font-pp max-md:pr-2 text-lg">Delegate</TableHead>
            <TableHead className="text-red-400 font-pp text-lg">Delegation</TableHead>
            
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="  font-bold text-red-400 font-pp max-md:pr-2">{invoice.invoice}</TableCell>
              <TableCell className="text-white font-pp text-base md:text-lg ">{invoice.paymentStatus}</TableCell>
              <TableCell className="text-white font-pp text-base md:text-lg ">{invoice.paymentMethod}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
    
      </Table>
    )
  }
  