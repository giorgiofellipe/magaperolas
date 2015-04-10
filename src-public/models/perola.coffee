app.factory 'Perola', (Parse) ->
  class Perola extends Parse.Model
    @configure "Perola", "frase", "autor", "liberada"
