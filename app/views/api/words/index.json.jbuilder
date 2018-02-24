
@words.each do |word|
  json.set! word.id do
    json.extract! word, :id, :content
  end
end
