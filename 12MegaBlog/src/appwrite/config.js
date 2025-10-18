import conf from '../conf/conf'
import {Client, ID, Databases, Storage, Query, Permission, Role} from 'appwrite';
export class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setProject(conf.appwriteProjectId)
            .setEndpoint(conf.appwriteUrl);
            this.databases = new Databases(this.client)
            this.bucket = new Storage(this.client)
    }

    async createPost ({title, slug, content, featuredImage, userId, status}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }

            )
        }
        catch(err){
            throw(err)
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        }
        catch(err){
            throw(err)
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        }
        catch(err){
            throw(err)
            return false
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }
        catch(err){
            throw(err)
        }
    }

    async getPosts(
        queries = [Query.equal("status","active")]
    ){
        try{
            return await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,queries)
        }catch(err){
            console.log("Error:", err);
            return { documents: [] } 
        }
    }

    // file upload services

    async uploadFile(file){
        try{
            return this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
                [
                    Permission.read(Role.any()) 
                ]
            )
        }
        catch(err){
            throw(err)
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(conf.appwriteBucketId, fileId)
            return true
        }catch(err){
            throw(err)
        }
    }

   
    getFilePreview(fileId){
        return `${conf.appwriteUrl}/storage/buckets/${conf.appwriteBucketId}/files/${fileId}/view?project=${conf.appwriteProjectId}`
    }


}



const service = new Service();

export default service