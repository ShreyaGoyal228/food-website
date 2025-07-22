"use client";
import CartCard from "@/components/shared/cart-card";
import useStore from "@/store/cartStore";

export default function Cart() {
  const { cart, totalPrice } = useStore();
  return (
    <>
      <div className="mt-5">
        {cart.length == 0 ? (
          <div className="text-center text-lg text-black font-semibold">
            Your cart is empty
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 w-full container max-w-full mx-auto">
            <div className="basis-[70%] bg-white rounded-md flex flex-col gap-3">
              {cart.map((item, index) => (
                <CartCard key={index} item={item} />
              ))}
            </div>

            <div className="lg:basis-[30%] border border-gray-500 rounded-md p-4 flex flex-col gap-5">
              <div className="text-center text-lg font-medium">
                Order Summary
              </div>
              <div className="text-center">
                The total of the items in the cart is :
                <span className="text-base font-medium text-green-800">
                  ₹{totalPrice()}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
