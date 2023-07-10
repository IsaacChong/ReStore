using System.ComponentModel.DataAnnotations.Schema;
namespace API.Entities
{
    [Table("BasketItems")]
    public class BasketItem
    {
        public int Id {get; set;}

        public int Quantity {get; set;}

        // Below are the navigation properties. A way to link to the Product and Basket. 
        // This will configure entity framework to cascade delete the Basket/Product/BasketItems when there are no products or basketitems left
        public int ProductId {get; set;}

        public Product Product {get; set;}

        public int BasketId {get; set;}

        public Basket Basket {get; set;}
    }
}