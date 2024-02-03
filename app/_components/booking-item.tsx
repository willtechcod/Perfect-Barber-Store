import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
    return ( 
        <Card>
            <CardContent className="p-5 flex justify-between py-0">
                <div className="flex flex-col gap-2 py-5">
                    <Badge className="bg-[#221c3d] text-primary hover:bg-[#221c3d] w-fit">Confirmado</Badge>
                    <h2 className="font-bold">Corte Degradê Navalhado</h2>
                    <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                            <AvatarImage
                            src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
                             />
                             <AvatarFallback>FT</AvatarFallback>
                        </Avatar>
                        <h3 className="text-sm">Barbearia Preto no Branco</h3>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center px-3 border-l border-solid border-secondary">
                    <p className="text-sm">Fevereiro</p>
                    <p className="text-2xl">03</p>
                    <p className="text-sm">15:27</p>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default BookingItem;