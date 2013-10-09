get '/' do #this gets our html in the index page from the web server   
  # @grandma = params[:grandma] 
  # Look in app/views/index.erb
  erb :index # this is what "get" is getting
end # from the index.erb

post '/grandma' do 
	@input = params[:user_input]
	
	if 
		@input == @input.downcase
		"speak up sonny"
	else
		"thanks"
	end

	

  # erb :grandma_says
end
