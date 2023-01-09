import { useEffect, useState } from "react"

const usePublisher = email => {
    const [isPublisher, setIsPublisher] = useState(false);
    const [isPublisherLoading, setIsPublisherLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_ApiUrl}users/publisher/${email}`).then(res => res.json()).then(result => {
                setIsPublisher(result.isPublisher)
                setIsPublisherLoading(false)
            })
        }
    }, [email])
    return [isPublisher, isPublisherLoading]

}
export default usePublisher 