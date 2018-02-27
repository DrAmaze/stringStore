class Api::WordsController < ApplicationController
  def create
    @word = Word.new(word_params)

    if @word.save
      render :index
    else
      render json: @word.errors.full_messages, status: 422
    end
  end

  def show
    @word = Word.find(params[:id])
  end

  def index
    @words = Word.all
  end

  def destroy
    @word = Word.find(params[:id])
    @word.destroy

    render :show
  end

  private

  def word_params
    params.require(:word).permit(:content)
  end
end
