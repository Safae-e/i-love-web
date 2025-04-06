# Query parameters:

Experiment 1: [fdnd.directus.app/items/person/?sort=-name](https://fdnd.directus.app/items/person/?sort=-name)

 -?Sort: sorteren op bijv naam. gebruik `-` om de volgorde te veranderen. 

Experiment 2: https://fdnd.directus.app/items/person/?filter={%22name%22:{%22_starts_with%22:%22D%22}}

 -?filter: filtert data,  Laat alleen de data zien die je wilt

 







# Liquid filters
Upcase:

Maakt van elk teken een hoofdletter in een string (tekenreeks).

`{{ "stories" |  upcase }}`


Prepend:

Hiermee voeg je de opgegeven string toe aan het begin van een andere string.
`{{ "stories" |  prepend: 'قــصـص' }}`

قــصـصSTORIES

Append:

-uniq

-minus


Meerdere filters toevoegen aan 1 object/string doe je door het erachter te schrijven--> `{{ "STORIES" |  prepend: 'قــصـص' | truncate: 10 }}`

