import Rating from "./Rating";

const Card = () => {
  return (
    <div class="Card">
      <div class="flex flex-col justify-center items-stretch px-8 gap-16px py-4 h-299px rounded">
        <div class="box-border hover:grey">
          <img
            class="aspect-auto w-48 rounded "
            src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt="img"
          />

          <div class="text-left text-sm font-sans leading-5">Product Name</div>
          <div class="text-left text-m font-bold">$120</div>
          <div class="text-left text-sm">
            <Rating />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
