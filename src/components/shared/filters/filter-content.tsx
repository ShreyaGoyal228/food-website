import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function FilterContent() {
  return (
    <>
      <Tabs defaultValue="sort" className="flex flex-row ">
        <TabsList className="bg-[rgb(248,248,248)] w-[40%] border-r-[2px] border-[#E9E9E9] flex flex-col gap-1.5 items-start pb-20">
          <TabsTrigger value="sort" className="mt-2 py-3">
            Sort
          </TabsTrigger>
          <TabsTrigger value="ratings" className=" py-3">
            Ratings
          </TabsTrigger>
          <TabsTrigger value="veg/nonVeg" className=" py-3">
            Veg/Non-Veg
          </TabsTrigger>
        </TabsList>
        <div className="px-4 lg:px-10">
          <TabsContent value="sort" className="mt-4">
            <div className="text-sm lg:text-base font-medium mb-3">SORT BY</div>
            <RadioGroup defaultValue="default" className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1" className="">
                  Default
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="rating" id="r2" />
                <Label htmlFor="r2">Rating</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="low-to-high" id="r3" />
                <Label htmlFor="r3">Cost: Low to High</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="high-to-low" id="r3" />
                <Label htmlFor="r3">Cost: High to Low</Label>
              </div>
            </RadioGroup>
          </TabsContent>
          <TabsContent value="ratings" className="mt-4">
            <div className="text-base font-medium mb-3">Filter By</div>
            <RadioGroup defaultValue="" className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="4.5+" id="r1" className="" />
                <Label htmlFor="r1">Ratings 4.5+</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="4.0+" id="r2" />
                <Label htmlFor="r2">Ratings 4.0+</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="3.5+" id="r3" />
                <Label htmlFor="r3">Ratings 3.5+</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="3.0+" id="r3" />
                <Label htmlFor="r3">Ratings 3.0+</Label>
              </div>
            </RadioGroup>
          </TabsContent>
          <TabsContent value="veg/nonVeg" className="mt-4">
            <div className="text-base font-medium mb-3">Veg / Non-Veg</div>
            <RadioGroup defaultValue="" className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="veg" id="r1" className="" />
                <Label htmlFor="r1">Veg</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="non-veg" id="r2" />
                <Label htmlFor="r2">Non-Veg</Label>
              </div>
            </RadioGroup>
          </TabsContent>
        </div>
      </Tabs>
    </>
  );
}
