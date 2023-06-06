import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
  return (
    <>
      <List>
        {products.map((prd) => (
          <ListItem key={prd.id}>
            <ListItemAvatar>
              <Avatar src={prd.pictureUrl} />
            </ListItemAvatar>
            <ListItemText>
              <h3>{prd.name}</h3>
              <p>Price: ${prd.price}</p>
              <p>Description: {prd.description}</p>
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" onClick={addProduct}>Add product</Button>
    </>
  );
}
