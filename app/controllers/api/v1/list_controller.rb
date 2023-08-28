class Api::V1::ListController < ApplicationController
    def index
        @list = List.all
        render '/home/index'
    end
end
