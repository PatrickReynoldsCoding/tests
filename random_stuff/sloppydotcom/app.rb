require 'sinatra'
require 'sinatra/reloader'

class SloppyDotCom < Sinatra::Base
  configure :development do
    register Sinatra::Reloader
  end

  get '/' do
    erb :"index"
  end

  get '/players/paddy' do
    erb :"players/paddy"
  end

  #what is layout.erb?

end