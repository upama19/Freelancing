import Link from "next/link";
import { useRouter } from "next/router";

const TalentFilter = () => {
    const router = useRouter();

    const { servicesOffered } = router.query;

    return (
        <>
            <select className="filter-box" style={{cursor:'pointer'}} onChange={(e) => {
                router.push(e.target.value)
            }}>
                <option value=''>Filter</option>

                <option value={`/talentRecords?servicesOffered=${servicesOffered}&sort=-price`}>
                    Price high to low
                </option>

                <option value={`/talentRecords?servicesOffered=${servicesOffered}&sort=price`}>price low to high</option>
                <option value={`/talentRecords?servicesOffered=${servicesOffered}&sort=averageRating`}>Rating low to high</option>

                <option value={`/talentRecords?servicesOffered=${servicesOffered}&sort=-averageRating`}>Rating high to low</option>
            </select>

        </>
    )
};

export default TalentFilter;