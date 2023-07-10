namespace API.Entities
{
    public class Basket
    {
        // Entity framework auto creates the "Id"
        public int Id { get; set; }

        public string BuyerId { get; set; }

        // Creating a new instance of "Basket" class will also create an empty list for the property "Items"
        // This is due to the "new()" method called and assigned to the "Items" property
        public List<BasketItem> Items { get; set; } = new();

        public void AddItem(Product product, int quantity)
        {
            if (Items.All(item => item.ProductId != product.Id))
            {
                Items.Add(new BasketItem { Product = product, Quantity = quantity });
            }

            var existingItem = Items.FirstOrDefault(item => product.Id == item.ProductId);
            if (existingItem != null)
            {
                existingItem.Quantity += quantity;
            }
        }

        public void RemoveItem(int productId, int quantity)
        {
            var removedItem = Items.FirstOrDefault(item => productId == item.ProductId);
            if (Items == null)
            {
                return;
            }
            removedItem.Quantity -= quantity;
            if (removedItem.Quantity <= 0)
            {
                Items.Remove(removedItem);
            }
        }
    }
}