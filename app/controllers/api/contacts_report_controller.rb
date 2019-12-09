class Api::ContactsReportController < ApplicationController
  require "csv"
  require "json"
  require "action_view"
  include ActionView::Helpers::NumberHelper
  
  def create    
    # Grabs the file name
    file_name = params.keys.first
    # Reads the uploaded CSV file
    csv = CSV.read(params[file_name], headers: true)

    phone_1 = "Phone 1 number"
    phone_2 = "Phone 2 number"
    phone_3 = "Phone 3 number"

    # Loop through each record and format each phone number
    csv.each_with_index do |row, i|
      # Validate the license number
      check_license_number(row)

      row[phone_1] = format_phone(row[phone_1])
      row[phone_2] = format_phone(row[phone_2])
      row[phone_3] = format_phone(row[phone_3])
    end

    # Generate the JSON object
    csv_to_json = convert_to_json(csv)
    
    # Create the json file
    generate_report(csv_to_json, file_name)
    render json: csv_to_json
  end

  # Some methods that extract some of the logic from the controller. Kept them here for easy reference 
  private
  
    # Method that will validate the License number
    def check_license_number(row)
      # Checks to see if the License number exists
      if row["License number"] == nil || row["License number"].length != 10
        csv.delete(i)
      end
    end

    # Method that converts the CSV file to a json object
    def convert_to_json(csv)
      csv = CSV.new(csv.to_s, :headers => true, :header_converters => :symbol, :converters => :all)
      csv.to_a.map { |row| row.to_hash }
    end

    # Method that creates the json file and saves it to the public folder
    def generate_report(json, file_name)
      File.open("public/#{file_name}.json","w") do |f|
        f.write(json)
      end 
    end

    # Method that will format the phone to (xxx) xxx-xxxx
    def format_phone(phone_number)
      if phone_number != nil
        # Removes all punctuation
        new_number = phone_number.gsub(/\W/, "")
        # Checks for 1 in front of area code
        if new_number.length == 11
          # Removes the 1 in front of the area code which breaks format
          new_number = new_number[1..-1]
        end
        # Helper method in Rails that converts the phone to match requested format
        new_number = number_to_phone(new_number, area_code: true)
        new_number
      end
    end

end
