from bs4 import BeautifulSoup
import pandas as pd
import numpy as np
import requests
import json




def json_file(place):
  url = f"https://www.practo.com/{place}/psychiatrist/"


  Headers = ({'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          'Accept-language': 'en-US, en;q=0.5'})


  webpage = requests.get(url,headers=Headers)
  # print(webpage)

  soup = BeautifulSoup(webpage.content , 'html.parser')
  # soup = soup.encode("utf-8")

  #empty list to append the doc detail dictionary
  doc_data_extracted =  []

  #doctor name
  doc_name =  soup.find_all('h2' , class_='doctor-name')

  #extracting profile link
  profile_link = soup.find_all('div', class_="info-section")

  #year of experienc of the doctor
  year_of_exp = soup.find_all('div',{'data-qa-id':"doctor_experience"})

  #locality
  locality = soup.find_all('span', {"data-qa-id":"practice_locality"})

  #consulting fee
  consult_fee = soup.find_all('span', {"data-qa-id":"consultation_fee"})

  #patient stories
  patient_stories = soup.find_all('span', {"data-qa-id":"total_feedback"})

  #doctor recommendation
  doc_recommendation = soup.find_all('span', {"data-qa-id":"doctor_recommendation"})

  for i in range(len(doc_name)):
    doc_data = {}
    #appending doctor name in the dictionary
    try:
      doc_data['doc_name'] = doc_name[i].text
    except:
      doc_data['doc_name'] = ""

    #appending doctor profile link
    try:
      doc_data['profile_link']= f"https://www.practo.com{profile_link[i].a['href']}"
    except:
      doc_data['profile_link'] = ""

    #appending year of experience
    try:
      doc_data['year_of_exp'] = year_of_exp[i].div.get_text().split()[0]
    except:
      doc_data['year_of_exp'] = ""

    #appending locality
    try:
      doc_data['locality'] = locality[i].text.strip(",")
    except:
      doc_data['locality'] = ""

    #appending consulting fee
    try:
      doc_data['consulting_fee']=consult_fee[i].text
    except:
      doc_data['consulting_fee']=consult_fee[i].text

    #appending pa`tient stories
    try:
      doc_data['patient_stories'] = patient_stories[i].text.split()[0]
    except:
      doc_data['patient_stories'] = ""

    #appending doctor recommendation
    try:
      doc_data['doc_recommmendation'] = doc_recommendation[i].text.strip(" ")
    except:
      doc_data['doc_recommmendation'] = ""
    
    #appending this dict to list 
    doc_data_extracted.append(doc_data)

  return json.dumps(doc_data_extracted)
  # print(json_file)




# doc_data_pd = pd.DataFrame.from_dict(doc_data)
# print(doc_data_pd.head(5))
# json_string = doc_data_pd.to_json(orient='split')
# print(json_string)


  
