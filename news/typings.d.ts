type Category  = 
 "business" | "entertainment" | "general" | "health" | "science" | "sports" | "technology";

type Pagination = {
    
}

 type NewsResponse =  {
    pagination: Pagination;
    data: Article[];
 }