import { Order } from "../bounded-contexts/sales/order";
import { OrderCreatedEvent } from "../bounded-contexts/sales/order-created";
import { DomainEvents } from "../core/DomainEvents";

// Subscribers
DomainEvents.registerSubscriber(
  OrderCreatedEvent.name,
  (order) => {
    console.log(order)
  },
);

// Publisher
const order = Order.create({
  customerId: 'customer-1',
  productId: 'product-',
  amountInCents: 1000,
  status: 'paid',
  createdAt: new Date()
});

// Atestado de finalização do processo de venda
DomainEvents.dispatchEventsForEntity(order.id);

