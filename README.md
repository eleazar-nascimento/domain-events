# Domain Events

## Bounded Contexts

Dentro do DDD, os contextos da nossa aplicação (módulos / microsserviços).

## Por que Domain Events?

- Se intercomunicar entre os bounded contexts da aplicação.

## Exemplo da vida real:

### Vendas (Sales)

### Fiscal (Fiscal)

- Emitir nota fiscal (Casos de use);
- Cancelar nota fiscal (Casos de uso);

# Problemática

- como que, ao fechar a venda, eu farei a emissão da nota fiscal?

------

## Diagrama de casos de uso

Atores --> Casos de uso

------

# Pub/Sub

- Publish (publicadores) / Subscriber (inscrito)

```js
subscribeToEvent('order-created', submitInVoice())

```

```js
    const subscribers = {
        'order-created': [submitInVoice()]
    }

    function createOrder() {
        publishToEvent('order-created', {
            id: 'order-id',
            customer: 'Diego',
        })
    }

    const eventSubscribers = subscribers['order-created']
``` 
