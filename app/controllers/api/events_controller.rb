class Api::EventsController < ApplicationController


    def show
        @event = Event.find(params[:id])
        if @event
            render json: @event, status: 200
        else
            render json: @event.errors.full_messages, status: 404
        end
    end

    def index

        @user = User.find(params[:user_id])

        @events = @user.events
        render json: @events, status: 200
    end


    def destroy
       
        @event = Event.find(params[:id])
        if @event.destroy
            render json: @event, status: 200
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def create
        @event = Event.new(event_params)
        if @event.save
            render json: @event, status: 200
        else    
            render json: @event.errors.full_messages, status: 422
        end
    end

    def update
        @event = Event.find(params[:id])
        if @event.update(event_params)
            render json: @event, status: 200
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    private

    def event_params
        params.require(:event).permit(:user_id, :title, :start, :end, :theme, :description)
    end


end