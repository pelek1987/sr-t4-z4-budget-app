# 4. Kalkulator wydatków
   Napisz kalkulator wydatków. Aplikację podziel na dwie listy:

Pierwsza lista prezentuje Twoje wydatki (nazwa, kwota, kategoria)
Druga lista to przychody (nazwa, kwota, kategoria)
Zrób formularz dodawania, który posiada:

pole radio określające czy jest to wydatek, czy przychód
pole input typu text z nazwą
pole input typu number z kwotą
pole select z kategorią
przycisk dodawania
Kategorie możesz przechowywać w tablicy i przekazywać do selecta. Powinniśmy mieć możliwość usunięcia każdej pozycji (zarówno przychód, jak i wydatek)

W widocznym miejscu aplikacja powinna pokazywać Twój budżet, czyli np. 1500zł albo -200zł i kolorować na zielono lub czerwono w zależności czy jest powyżej zera :)

## Modyfikacja 1
Zdefiniuj wcześniej dwie listy w tablicach - dla wydatków i przychodów. Te dwie listy będą pokazywały się od razu po załadowaniu aplikacji. Formularz natomiast będzie dodawał nową pozycję do już istniejących.

## Modyfikacja 2
Możesz zmodyfikować swoją aplikację w taki sposób, aby dodawane dane były przechowywane w localStorage - czyli za każdym razem, gdy załadujesz aplikację dane nie będą znikały, a zostaną załadowane z localStorage.
