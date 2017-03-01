<?php

namespace Craft;

return [
  'endpoints' => [
    'api/juice.json' => [
      'elementType' => 'Commerce_Product',
      'criteria' => ['typeId' => '2'],
      'transformer' => function (Commerce_ProductModel $prod){
        return [
          'id' => $prod->id,
          'title' => $prod->title,
          'description' => $prod->description,
          'price' => money_format('%i', $prod->defaultPrice),
          'list' => $prod->ingredients,
          'stock' => $prod->totalStock,
          'slug' => $prod->slug,
          'pId' => $prod->defaultVariantId,
          'url' => $prod->url,
          'jsonUrl' => UrlHelper::getUrl("api/juice/{$prod->id}.json")
        ];
      }
    ],
    'api/orders.json' => [
      'elementType' => 'Commerce_Order',
      'criteria' => ['isCompleted' => '1'],
      'transformer' => function (Commerce_OrderModel $order) {
        return [
          'id' => $order->id,
          'number' => $order->number,
          'dateOrdered' => $order->dateOrdered,
          'totalPrice' => money_format('%i', $order->totalPrice),
          'isCompleted' => $order->isCompleted,
          'addresses' => function (Address_Model $addresses) {
            return [
              'state' => $addresses->stateText
            ];
          }
        ];
      }
    ]
  ]
]
 ?>
