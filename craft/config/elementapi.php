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
    ]
  ]
]
 ?>
